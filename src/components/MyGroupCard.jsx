import { Link } from "react-router";
import Swal from "sweetalert2";

const MyGroupCard = ({ groups, myGroups, setMyGroups }) => {
  console.log(groups);

  const {
    _id,
    groupName,
    groupCategory,

    startDate,
    location,
    photo,
  } = groups;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/groups/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              if (data.deletedCount) {
                setMyGroups(myGroups.filter((g) => g._id !== _id));
              }
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center  gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-8 w-8 lg:h-12 lg:w-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold dark:text-black text-[10px] lg:text-xl">
              {groupName}
            </div>
            <div className="text-[10px] lg:text-xl dark:text-gray-900 opacity-70">
              {location}
            </div>
          </div>
        </div>
      </td>
      <td className="font-bold text-[10px] dark:text-black lg:text-xl">
        {groupCategory}
      </td>
      <td className="font-bold text-[10px] dark:text-black lg:text-xl">
        {startDate}
      </td>
      <th className="space-y-3 lg:space-y-0 flex gap-2 lg:space-x-3">
        <Link to={`/update-group/${_id}`}>
          <button className="btn btn-primary font-bond btn-sm">Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-primary font-bond btn-sm"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyGroupCard;
