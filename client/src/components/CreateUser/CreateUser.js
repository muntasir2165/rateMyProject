import React from "react";
import "./CreateUser.css";

const createUser = props => (
    <div className="input-group mb-3">
        <form>
            <div className="input-group-prepend">
                <label>
                    User Name:
            <input type="text" name="UserName" />
                </label>
            </div>
            <div className="input-group-prepend">
                <label>
                    First Name:
               <input type="text" name="FirstName" />
                </label>
            </div>
            <div className="input-group-prepend">
                <label>
                    Last Name:
               <input type="text" name="LastName" />
                </label>
            </div>
            <div className="input-group-prepend">
                <label>
                    Password:
               <input type="text" name="Password" />
                </label>
            </div>
            <div className="input-group-prepend">
                <label>
                    Email:
               <input type="text" name="UserEmail" />
                </label>
            </div>
            <div className="input-group-prepend">
                <label>
                    Mobile (Optional):
               <input type="text" name="MobileNumber" />
                </label>
            </div>
            <div className="input-group-prepend">
                <label>
                    iMage URL (Optional):
               <input type="text" name="ImgUrl" />
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Create user</button>
        </form>
    </div>
)
export default createUser;