'use client'

import RoomsComponent from "./RoomsComponent";

function RoomContainer() {
    return (
        <>
            <div className="flex flex-col gap-[3.563rem] px-[0.938rem] py-[3.688rem] justify-center items-center bg-dark">
                <RoomsComponent text="Кухня" img="/kitchen.png" />
                <RoomsComponent text="Кухня" img="/kitchen.png" />
                <RoomsComponent text="Кухня" img="/kitchen.png" />
            </div>
        </>
    );
}
// WayByeLive87431256*&^)(
export default RoomContainer;