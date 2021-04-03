import React from 'react';

class Messages extends React.Component {
  render() {
    return (
        <form>
            <h1>Leave a Message:</h1>
            <div>
                <input type="text" name="messages"/>
            </div>
            <input type="submit" value="Submit Message" />
        </form>
    );
  }
}

export default Messages; 