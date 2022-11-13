import { useRouter } from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  return (
    <div className="flex flex-row my-8">
      <div className="w-1/2">
        <Image src="/web/logo/web_logo_black.svg" width={100} height={90} />
      </div>
      <div className="w-1/2 flex justify-end items-center space-x-3">
        <span
          className={`${
            router.pathname.includes("works") && "border-b-[1px]"
          } border-black cursor-pointer`}
          onClick={() => router.push("/works")}
        >
          WORKS
        </span>
        <span
          className={`${
            router.pathname.includes("designers") && "border-b-[1px]"
          } border-black cursor-pointer`}
          onClick={() => router.push("/designers")}
        >
          DESIGNER
        </span>
      </div>
    </div>
  );
}

export default Header;