import React, { useState } from "react";

export default function AddContact({ addContactsHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" && email === "") {
      alert("Please enter a name and email");
      return;
    }
    addContactsHandler([name, email]);

    // setName("");
    // setEmail("");
    console.log("button pressed");
  }

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" && this.state.email === "") {
//       alert("Please enter a name and email");
//       return;
//     }

//     console.log(this.state);
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={(e) => {
//                 this.setState({ name: e.target.value });
//               }}
//               value={this.state.name}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               onChange={(e) => {
//                 this.setState({ email: e.target.value });
//               }}
//               value={this.state.email}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }
