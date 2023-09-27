import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Doc } from '../models/doc';
import { HttpClient } from '@angular/common/http';
import { DocFilters } from '../models/doc-filters';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http: HttpClient) { }

  getDocs(DocFilters: DocFilters) {
    return this.http
      .get<any>(`/api/docs/`, {
        params: {
          ...DocFilters,
        }
      })
      .pipe(
        map((data: any) => {
          const docs_data = data.results || []
          const total_items = data.count || 0
          return {
            results: docs_data.map(function (docs: any): Doc {
              return {
                ...docs
              } as Doc
            }),
            count: total_items,
          };
        })
      );
  }

  getFilters(data: any) {
    return this.http.get<any>(`/api/docs/filters/`, {
      params: { ...data }
    });
  }

  save(data: any, id?: string) {
    let result;
    if (id) {
      result = this.editDoc(data, id)
    } else {
      result = this.createDoc(data)
    }
    return result.pipe(
      map((data) => {
        return data
        const Docs_data = data.results || []
        const total_items = data.count || 0
        return {
          results: Docs_data.map(function (Doc: any): Doc {
            return {
              ...Doc
            } as Doc
          }),
          count: total_items,
        };
      })
    );
  }

  createDoc(data: any) {
    return this.http.post<any>(`/api/docs/`, data);
  }
  editDoc(data: any, id: string) {
    return this.http.patch<any>(`/api/docs/${id}/`, data);
  }
  readDoc(id: string) {
    return this.http.get<Doc>(`/api/docs/${id}/`).pipe(
      map((data) => {
        return {
          ...data
        } as Doc;
      })
    );
  }
  deleteDoc(id: string) {
    return this.http.delete<any>(`/api/docs/${id}/`);
  }
}