export interface Trip {
  _id: string; //mongoDB primary key
  code: string;
  name: string;
  length: string;
  start: string;
  resort: string;
  perPerson: number;
  image: string;
  description: string;
}
