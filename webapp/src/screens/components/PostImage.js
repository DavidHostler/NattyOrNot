import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import DisplayPrediction from '../DisplayPrediction';
import FrontPage from '../design/FrontPage';



class PostImage extends Component {

  state = {
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    let url = 'http://localhost:8000/images/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>
            Natty Or Not
          </h1>
        </div>

        <FrontPage/>

        <form onSubmit={this.handleSubmit}>
           
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>

        {/* Page Navigator Code */}
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            }}
            >

              {/* <Link to="/DisplayPrediction" component={DisplayPrediction}> */}
          <input type="submit"/>
              {/* </Link> */}

        </nav>
        </form>
      </div>
    );
  }
}

export default PostImage;


// import React, { Component } from 'react';

// class PostImage extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           modal: false,
//           images: [],
//           isLoading: false,
//           error: null,
//       };
  
//       this.toggle = this.toggle.bind(this);
//       this.handleClick = this.handleClick.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//   toggle() {
//       this.setState({
//           modal: !this.state.modal
//       });
//   }
  
//   handleClick(event) {
//       event.preventDefault();
//       this.setState({
//           modal: !this.state.modal
//       });
//   }
  
//   handleSubmit(event){
//       event.preventDefault();
  
//       this.setState({ isLoading: true });
//       let path = this.props.path;
//       const formData = new FormData();

//       fetch(`http://127.0.0.1:8000/media/images`, {
//           method: 'POST',
//           body: formData,
//           // headers: {'Content-Type':'multipart/form-data'},
//           // body: new FormData(document.getElementById('addPhoto'))
//       })
//           .then((response) => response.json())
//           .then((data)=>{
//               this.setState({images: data.images, isLoading: false});
//               this.props.updateImages(data.images);
//           })
//           .catch(error => this.setState({ error, isLoading: false}));
//   }
  



//   addFile(event) {
//     var formData = new FormData();
//     formData.append("file", event.target.files[0]);
//     formData.append('name', 'some value user types');
//     formData.append('description', 'some value user types');
//     console.log(event.target.files[0]);

//     fetch(`http://localhost:8000/images/`, {
//       method: 'POST',
//       mode: "cors",
//       headers: {
//           Authorization: `Bearer: ${token}`,
//           "Content-Type": "multipart/form-data",
//       },
//         // headers: {'Content-Type': 'multipart/form-data'},
//         // body: {event.target.files[0]},
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         this.setState({images: data.images, isLoading: false});
//         this.props.updateImages(data.images);
//     })
//     .catch(error => this.setState({error, isLoading: false}));
// }

//   render() {
//       return (
//           <div>
//             <form encType="multipart/form-data" action="">
//                 <input id="image" onChange={this.addFile.bind(this)} type="file"
//                  accept="image/png, image/jpeg" 
//                 />
//                 <input type="submit"/>
//             </form>
//           </div>
          
//       );
//   }
//   }


// export default PostImage;