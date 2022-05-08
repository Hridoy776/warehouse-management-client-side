import React from "react";

const Blog = () => {
  return (
    <div className="p-5 pt-[90px]">
      <p className="text-4xl text-[#c703c7] font-[400] text-center my-4">
        javascript vs node js
      </p>
      <div class="container lg:px-[100px] px-0 lg:grid justify-center items-center grid-cols-2 gap-4  p-5 mt-[10px]">
        <div className="text-center  p-3 rounded-lg border-solid border-2 border-[purple] mb-5">
          <p className="text-4xl text-[#c703c7] font-[400]">javascript</p>
          <div>
            <p>
              javascript is a programing language for using writing script on
              website.javascript only can run on browser.javascript used only in
              clent side .capable to contain html tag and play with dom.it is
              generally used in front end development.
            </p>
          </div>
        </div>
        <div className="text-center  p-3 rounded-lg border-solid border-2 border-[purple] mb-5">
          <p className="text-4xl text-[#c703c7] font-[400]">node js</p>
          <div>
            <p>
              node js is a javascript run time environment. for runnig
              javascript out side the browser node js is helping.node js con't
              capable to have html tag and can not play with dom.node js used in
              server side.it is generally used in back end development.
            </p>
          </div>
        </div>
      </div>
      <p className="text-4xl text-[#c703c7] font-[400] text-center my-4">
        sql vs nosql
      </p>
      <div class="container lg:px-[100px]  px-0 lg:grid justify-center items-center grid-cols-2 gap-4  p-5 mt-[10px] ">
        <div className="text-center  p-3 rounded-lg border-solid border-2 border-[purple] mb-5">
          <p className="text-4xl text-[#c703c7] font-[400]">sql</p>
          <div>
            <p>
              data storage model generally based on table with fixed row and
              colum.for redusing data duplications was developed in 1970.Schemas
              are rigid.verticaly scaling.typically required joins.
            </p>
            <p>example:Oracle, Mysql,PostgreSQL</p>
          </div>
        </div>
        <div className="text-center  p-3 rounded-lg border-solid border-2 border-[purple] mb-5">
          <p className="text-4xl text-[#c703c7] font-[400]">nosql</p>
          <div>
            <p>
              data storage model based on Document and Grapgh.was developed in
              2000 focus on scalling and allowing rapid applicaton
              change.Fexible schemas.horizontally scaling.not required joins.
            </p>
            <p>example:MongoDB.CouchDB.Graph:amazon naptune</p>
          </div>
        </div>
      </div>
      <div class="container lg:px-[100px] px-0 lg:grid justify-center items-center grid-cols-2 gap-4  p-5 mt-[10px] ">
        <div className="text-center  p-3 rounded-lg border-solid border-2 border-[purple] mb-5">
          <p className="text-4xl text-[#c703c7] font-[400]">when use node js</p>
          <div className="lg:h-[150px]">
            <p>
              When you use something like Node.js, the server has no need of
              maintaining separate threads for each open connection.It runs
              Javascript, so you can use the same language on server and client,
              and even share some code between them (e.g. for form validation,
              or to render views at either end.)
            </p>
          </div>
        </div>
        <div className="text-center  p-3 rounded-lg border-solid border-2 border-[purple] mb-5 ">
          <p className="text-4xl text-[#c703c7] font-[400]">
            why node js is used
          </p>
          <div className="lg:h-[150px]">
            <p>
              node js is user frendly as a beginer.it is fast,lightweight and
              efficient.generally use asynchronous mode of operaton,event
              driven. It is a cross-platform Javascript run-time environment
              that executes Javascript code outside of a browser.it is a
              greatest tool for building real time web applications.provides
              cross-platform applications which run easily on any web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
