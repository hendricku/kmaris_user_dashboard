export interface Form {
  id: string;
  title: string;
  type: string;
  subtitle: string;
  package?: string;
  price?: string;
}

export interface AllFormsProps {
  forms?: Form[];
}