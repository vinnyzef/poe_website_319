import React from 'react';

const Page = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <div className="bottom_page">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default Page;
