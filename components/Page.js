import Link from "next/link";
import AddCount from "./IncrementCounter";
import Users from "./Users";

const Page = (props) => {
   return (
      <div>
         <h1 style={{ backgroundColor: "#ddd", marginBottom: "30px" }}>
            {props.title}
         </h1>
         <Users />
         <AddCount />
         <br />
         <nav>
            <Link href={props.linkTo}>Navigate</Link>
         </nav>
      </div>
   );
};

export default Page;
