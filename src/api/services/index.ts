import axios from '@/common/utils/axios'
import { AxiosResponse } from 'axios'

import { GetServicesRequest } from "./interfaces";
import { SearchResponse } from "../response";
import endpoints from "../endpoints";

export const getServices = async (request: GetServicesRequest): Promise<any> => {
    const params = new URLSearchParams()
    params.append('page', request.page.toString())
    params.append('take', request.take.toString())
    params.append('sort_enum', request.sort_enum)
    params.append('sort_by', request.sort_by)
    if (request.status) params.append('status', request.status)
    if (request.field && request.type && request.value) {
        params.append('field', request.field)
        params.append('type', request.type)
        params.append('value', request.value)
    }
    const response: AxiosResponse<SearchResponse<any>> = await axios.get(
        endpoints.services.list,
        { params: params },
    )

    return response.data
}