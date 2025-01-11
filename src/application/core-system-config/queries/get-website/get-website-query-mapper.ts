import { CoreSystemConfigEntity } from "@domain/entities";
import { CoreSystemConfigDTO } from "@domain/dtos/core-system-config";

export function map(coreSystemConfig: CoreSystemConfigEntity): CoreSystemConfigDTO {
  return {
    id: Number(coreSystemConfig.id),
    group: coreSystemConfig.group,
    type: coreSystemConfig.type,
    value: coreSystemConfig.value,
    image: coreSystemConfig.image || "",
    description_vi: coreSystemConfig.description_vi || "",
    description_en: coreSystemConfig.description_en || "",
    order: Number(coreSystemConfig.order),
    block_delete: coreSystemConfig.block_delete || 0,
    status: Number(coreSystemConfig.status),
    created_at: coreSystemConfig.created_at?.toISOString() || null,
    updated_at: coreSystemConfig.updated_at?.toISOString() || null,
    created_by: coreSystemConfig.created_by || "",
    updated_by: coreSystemConfig.updated_by || ""
  };
}
