export interface TemplateListResponse {
  data: Template[];
}

export interface Template {
  id: string;
  name: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}
