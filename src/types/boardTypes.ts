export type Item = {
    id: string;
    title: string;
  };
  
  export type List = {
    id: string;
    title: string;
    items: Item[];
  };
  
  export type Board = {
    name: string;
    bgcolor: string;
    list: List[];
  };
  
  export type BoardDataType = {
    active: number;
    boards: Board[];
  };
  