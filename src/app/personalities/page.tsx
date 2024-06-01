import Card from "@/components/card";
import { db } from "@/db/connection";
import { personalities } from "@/db/schema";

export default  async function Personalities(){

    const allPeople = await db.select().from(personalities)

    return(
        <div className="grid grid-cols-4 gap-4 bg-black">
            {allPeople.map((person)=> 
            <Card key={person.id} person={person}/>)}
        </div>
    )

}