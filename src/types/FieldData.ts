type Field = "thumb" | "alt" | "title" | "description";

export interface IFieldData extends FormData {
  append(name: Field, value: string | Blob, fileName?: string): void;
}
