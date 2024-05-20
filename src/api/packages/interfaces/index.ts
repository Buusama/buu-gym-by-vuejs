export interface CreatePackageRequest {
  name?: string;
  price?: number;
  free_service?: number[];
  duration?: number;
  description?: string;
}

export interface CreatePackageResponse {
  name?: string;
  price?: number;
  free_service?: number[];
  duration?: number;
  description?: string;
}

export interface GetPackagesRequest {
  page: number;
  take: number;
  sort_enum: string;
  sort_by: string;
  status?: string;
  field?: string;
  type?: string;
  value?: string;
}

export interface EditPackageRequest {
  name?: string;
  price?: number;
  free_service?: number[];
  duration?: number;
  description?: string;
}
