export interface Form {
  id: string;
  title: string;
  type: string;
  subtitle: string;
  package?: string;
  price?: string;
  status?: 'active' | 'locked';
}

export interface AllFormsProps {
  forms?: Form[];
}
