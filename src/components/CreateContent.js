import React, {Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
        <article>
            <h2>{this.props.title}</h2>
            <form action="/create_process" method="post" onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value,
                    );
                }.bind(this)}
            >
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="desc" placeholder="description"/></p>
                <p><input type="submit"></input></p>
            </form>
        </article>
        );
    }
}

// function CreateContent() {
//     return (
//         <article>
//             <h2>{this.props.title}</h2>
//             {this.props.desc}
//         </article>
//     );
// };

  export default CreateContent;