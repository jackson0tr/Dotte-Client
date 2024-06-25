import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "@material-ui/core";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { getAllCareers } from "../../redux/actions/career";

const AllCareers = () => {
  const dispatch = useDispatch();
  const { careers } = useSelector((state) => state.career);
  const [open, setOpen] = useState(false);
  const [careerId, setCareerId] = useState("");


  useEffect(() => {
    dispatch(getAllCareers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await axios
    .delete(`${server}/career/delete-career/${id}`, { withCredentials: true })
    .then((res) => {
      toast.success(res.data.message);
    });

  dispatch(getAllCareers());
  };

  const columns = [
    { field: "id", headerName: "Career ID", minWidth: 150, flex: 0.7 },

    {
      field: "title",
      headerName: "title",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "category",
      headerName: "category",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },
    {
        field: "Preview",
        flex: 0.8,
        minWidth: 100,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/get-career/${params.id}`}>
                <Button>
                  <AiOutlineEye size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Delete Career",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => setCareerId(params.id) || setOpen(true)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  careers &&
    careers.forEach((item) => {
      row.push({
        id: item._id,
        title: item.title,
        category: item.category,
      });
    });

  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2">All Careers</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
        {open && (
          <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
                <RxCross1 size={25} onClick={() => setOpen(false)} />
              </div>
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                Are you sure you wanna delete this career?
              </h3>
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={() => setOpen(false)}
                >
                  cancel
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() =>  setOpen(false) || handleDelete(careerId)}
                >
                  confirm
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCareers;
