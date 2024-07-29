import Link from "next/link";

const ProfileModal = () => {
  return <div className="absolute p-4 top-10 left-0 rounded-lg text-sm shadow-[0_3px_10px_rgb(0,0,0,0.25)] z-20">
    <Link href="/">Profile</Link>
    <div>Logout</div>
    </div>;
};

export default ProfileModal;
