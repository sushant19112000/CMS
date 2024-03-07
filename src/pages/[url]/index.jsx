import { checkType } from "@/app/middleware/checkType";

export default function DynamicRoute({type,error}){
    if (error) return <div className="text-center"><h2>Page Not Found</h2></div>
    return (
        <div className="
        ">{type}</div>
    )
}



export async function getServerSideProps(context) {
    try {
        const { url} = context.query;
        const type=checkType(url)
        if (type=="unknown"){
            return {
                props: { error: true },
            }; 
        }
        return {
            props: { type },
        };
    } catch (error) {
        return {
            props: { error: true },
        };
    }
}

