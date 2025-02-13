"use client";
import { deleteProjectsIntoDb } from "@/actions/Projects/DeleteProjectIntoDb";
import { TProject } from "@/Types/Types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ProjectManagementComponent = ({ project }: { project: TProject }) => {
  const router = useRouter();

  const handleDeleteBlog = async (id: string) => {
    // console.log("delete Blog", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteProjectsIntoDb(project._id);
        console.log(res);
        Swal.fire({
          title: "Deleted!",
          text: "Your Project has been deleted.",
          icon: "success",
        });
      }
      router.refresh();
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={project.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{project.title}</div>
          </div>
        </div>
      </td>
      <td>
        {project.name} <br /> {project.email}
      </td>
      <td>
        {" "}
        <div className="flex flex-col md:flex-row lg:flex-row gap-2">
          <Link href={`/dashboard/projectmanagement/${project._id}`}>
            {" "}
            <button className="btn bg-green-400 text-white btn-xs">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDeleteBlog(project._id)}
            className="btn bg-red-400 text-white btn-xs"
          >
            Delete
          </button>
        </div>
      </td>
      <th>
        <Link href={`/projects/${project._id}`}>
          {" "}
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default ProjectManagementComponent;
