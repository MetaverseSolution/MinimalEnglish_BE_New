import * as Interfaces from '@application/common/interfaces';
import { makeConfig } from '@infrastructure/config';
import { PrismaClient } from '@prisma/client';
import { Resolver, asFunction, asValue } from 'awilix';

import { makeLogger } from './logger';
import * as repositories from './repositories';

export type Dependencies = {
  config: Interfaces.ApplicationConfig;
  db: PrismaClient;
  logger: Interfaces.Logger;
  pagesRepository: Interfaces.PagesRepository;
  sectionsRepository: Interfaces.SectionsRepository;
  componentsRepository: Interfaces.ComponentsRepository;
  classesRepository: Interfaces.ClassesRepository;
  documentsRepository: Interfaces.DocumentsRepository;
  documentTypesRepository: Interfaces.DocumentTypesRepository;
  feedbacksRepository: Interfaces.FeedbacksRepository;
  lectureTypesRepository: Interfaces.LectureTypesRepository;
  lecturesRepository: Interfaces.LecturesRepository;
  lecturersRepository: Interfaces.LecturersRepository;
  newsCategoriesRepository: Interfaces.NewsCategoriesRepository;
  newsRepository: Interfaces.NewsRepository;
  coreSystemConfigsRepository: Interfaces.CoreSystemConfigsRepository,
  activityClassRepository: Interfaces.ActivityClassesRepository,
  customerReviewRepository: Interfaces.CustomerReviewsRepository,
  studentResultRepository: Interfaces.StudentResultsRepository,
};

export function makeInfrastructureDependencies(): {
  [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]>;
} {
  const config = makeConfig();
  const logger = makeLogger(config);
  const db = new PrismaClient();

  db.$connect().catch(() => {
    logger.error({ detail: 'Failed to establish a connection to the database!' });
    process.exit(1);
  });

  return {
    config: asValue(config),
    db: asValue(db),
    logger: asValue(logger),
    pagesRepository: asFunction(repositories.makePagesRepository).singleton(),
    sectionsRepository: asFunction(repositories.makeSectionsRepository).singleton(),
    componentsRepository: asFunction(repositories.makeComponentsRepository).singleton(),
    classesRepository: asFunction(repositories.makeClassesRepository).singleton(),
    documentsRepository: asFunction(repositories.makeDocumentsRepository).singleton(),
    documentTypesRepository: asFunction(repositories.makeDocumentTypesRepository).singleton(),
    feedbacksRepository: asFunction(repositories.makeFeedbacksRepository).singleton(),
    lectureTypesRepository: asFunction(repositories.makeLectureTypesRepository).singleton(),
    lecturesRepository: asFunction(repositories.makeLecturesRepository).singleton(),
    lecturersRepository: asFunction(repositories.makeLecturersRepository).singleton(),
    newsCategoriesRepository: asFunction(repositories.makeNewsCategoriesRepository).singleton(),
    newsRepository: asFunction(repositories.makeNewsRepository).singleton(),
    coreSystemConfigsRepository: asFunction(repositories.makeCoreSystemConfigRepository).singleton(),
    activityClassRepository: asFunction(repositories.makeActivityClassesRepository).singleton(),
    customerReviewRepository: asFunction(repositories.makeCustomerReviewsRepository).singleton(),
    studentResultRepository: asFunction(repositories.makeStudentResultsRepository).singleton(),
  };
}
