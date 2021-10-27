import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-service">
      <h1>Please Add a Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="Description" {...register("description")} />
        <input
          placeholder=" Enter Number"
          type="number"
          {...register("price")}
        />
        <input placeholder="Image url" {...register("img")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
