export interface CategoryaType{
    id:number,
    name:string,
    slug:string,
    image:string,
    creationAt:string,
    updatedAt:string,
}


export interface ProductsType {
    id:number,
    title:string,
    slug:string,
    price:number,
    description:string,
    category:CategoryaType,
    images:Array<string>,
    creationAt:string,
    updatedAt:string,

}