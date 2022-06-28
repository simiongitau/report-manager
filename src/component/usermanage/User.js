import React from "react";
export default function User() {
  return (
    <div className="flex flex-col">
      <button className="bg-blue-400 w-[150px] p-3 rounded mx-[55%] mt-[10vh] mb-[20px] lg:mx-[85%]">
        add user
      </button>
      <table className="table-auto  w-[95%] h-[60vh] ml-2 mr-2 lg:w-[80%] mx-auto lg:h-[40vh]">
        <thead>
          <tr className="p-10 border-blue-100 border-b-2">
            <th className="uppercase">name</th>
            <th className="uppercase">email id</th>
            <th className="uppercase">role</th>
            <th className="uppercase">status</th>
            <th className="uppercase">action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-blue-100 border-b-2 shadow-sm">
            <td>mary maina</td>
            <td>marya@gmail.com</td>
            <td>nomal user</td>
            <td>active</td>
            <td>delete</td>
          </tr>
          <tr className="border-blue-100 border-b-2 shadow-sm">
            <td>maince shan</td>
            <td>maincer@gmailcom</td>
            <td>admin</td>
            <td>pending</td>
            <td>delete</td>
          </tr>
          <tr className="border-blue-100 border-b-2 shadow-sm">
            <td>azzy nimal</td>
            <td>azzy@gmail.com</td>
            <td>nomal user</td>
            <td>active</td>
            <td>delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
