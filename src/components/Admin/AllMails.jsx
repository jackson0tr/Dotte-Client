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
import { getMails } from "../../redux/actions/mail";

const AllMails = () => {
  const dispatch = useDispatch();
  const { mails } = useSelector((state) => state.mail);
  const [open, setOpen] = useState(false);
  const [mailId, setMailId] = useState("");


  useEffect(() => {
    dispatch(getMails());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await axios
    .delete(`${server}/mail/delete-subscriber/${id}`, { withCredentials: true })
    .then((res) => {
      toast.success(res.data.message);
    });

  dispatch(getMails());
  };

  const columns = [
    { field: "id", headerName: "Mail ID", minWidth: 150, flex: 0.7 },

    {
      field: "senderEmail",
      headerName: "senderEmail",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "createdAt",
      headerName: "createdAt",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Delete Email",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => setMailId(params.id) || setOpen(true)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  mails &&
    mails.forEach((item) => {
      row.push({
        id: item._id,
        senderEmail: item.senderEmail,
        createdAt: item.createdAt,
      });
    });

  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2">All Subscribtions</h3>
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
                Are you sure you wanna delete this Email?
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
                  onClick={() =>  setOpen(false) || handleDelete(mailId)}
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

export default AllMails;
