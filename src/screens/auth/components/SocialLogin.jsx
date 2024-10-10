import { Button } from "antd";
import { useState } from "react";

function SocialLogin() {
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    const handleLoginWithGoogle =()=>{
        
    }
    return ( <Button
        loading={isLoading}
        onClick={handleLoginWithGoogle}
        style={{
            width: '100%',
        }}
        size='large'
        icon={
            <img
                width={24}
                height={24}
                src='https://img.icons8.com/color/48/google-logo.png'
                alt='google-logo'
            />
        }>
        Google
    </Button> );
}

export default SocialLogin;