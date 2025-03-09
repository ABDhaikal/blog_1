import Link from "next/link";

interface NavbarButtonProps {
   name: string;
   linkref: string;
}

const NavbarButtonCard: React.FC<NavbarButtonProps> = ({
   name,
   linkref,
}) => {
   return (
      <div
         className={
            " flex items-center p-2  rounded-xl md:rounded-2xl border-2 border-black justify-center "
         }
      >
         <Link href={linkref}>
            <p className="  text-3xl text-center section-subtitle">{name}</p>
         </Link>
      </div>
   );
};

export default NavbarButtonCard;
