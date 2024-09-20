import {ConsultorsTable} from "@/app/(admin)/_components/consultores-table";
import React from "react";

const ConsultoresPage = () => {

    return (
        <div className={"p-6 grid grid-cols-4 grid-rows-3"}>
            <div className={"col-span-3 row-span-3"}>
                <ConsultorsTable/>
            </div>
            <div className={"w-full h-full rounded-lg flex items-center justify-center border m-4 bg-roxo text-white"}>
                <h1 className={"text-2xl font bold"}>teste</h1>
            </div>
            <div className={"w-full h-full rounded-lg flex items-center justify-center m-4 mt-6 bg-roxo text-white"}>
                <h1 className={"text-2xl font bold"}>teste</h1>
            </div>
            <div className={"w-full h-full rounded-lg flex items-center justify-center m-4 mt-8 bg-roxo text-white"}>
                <h1 className={"text-2xl font bold"}>teste</h1>
            </div>
        </div>
    )
}

export default ConsultoresPage;