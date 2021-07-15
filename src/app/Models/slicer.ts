export interface Slicer{
    slicerArray:SlicerArray
}

export interface SlicerArray{
    name:string;
    slicerdata:SlicerData[]
}

interface SlicerData{
    name:string;
    grouptype:string;
    sdata:SlicerModel[]
}

interface SlicerModel{
    id:number;
    name:string;
}