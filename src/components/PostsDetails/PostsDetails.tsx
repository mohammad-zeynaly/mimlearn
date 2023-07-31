import {
  FaRegClock,
  FaUserAlt,
  FaRegFolderOpen,
  FaRegEye,
} from "react-icons/fa";

const PostsDetails = (): JSX.Element => {
  const postDetails = [
    {
      id: crypto.randomUUID(),
      title: "5 جولای 2023",
      icon: <FaRegClock className="w-[18px] h-[18px]" />,
    },
    {
      id: crypto.randomUUID(),
      title: " توسط مدیریت",
      icon: <FaUserAlt className="w-4 h-4" />,
    },
    {
      id: crypto.randomUUID(),
      title: "مقالات",
      icon: <FaRegFolderOpen className="w-5 h-5" />,
    },
    {
      id: crypto.randomUUID(),
      title: "503k",
      icon: <FaRegEye className="w-5 h-5" />,
    },
  ];
  return (
    <>
      {postDetails.map((postDetail) => (
        <span key={postDetail.id} className="flex items-end">
          {postDetail.icon}
          <h6 className="pr-1 sm:pr-2">{postDetail.title}</h6>
        </span>
      ))}
    </>
  );
};

export default PostsDetails;
