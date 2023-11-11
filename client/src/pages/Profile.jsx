import { FormRow } from "../Components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useNavigation, Form, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async ()=>{
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
}

export const action = async ({request})=>{
  const formData=await request.formData();
  const file=formData.get("avatar");
  
  if(file && file.size >500000){
    toast.error("Image size is too large");
    return null;
  }
  try{
    await customFetch.patch('/users/update-user',formData);
    toast.success('Profile updated successfully');
  }catch(error){
    toast.error(error?.response?.data?.msg);
  }
  return null;
}

const Profile = () => {
  const {user}=useLoaderData();
  const { name, lastName, email, location } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>

        <div className="form-center">
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              Select an image file (max 0.5 MB):
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <button
            className="btn btn-block form-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "save changes"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
