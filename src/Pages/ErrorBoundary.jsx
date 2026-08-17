import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h4>Something went wrong</h4>
                    <h4>Please try later</h4>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;