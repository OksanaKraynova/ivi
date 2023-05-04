import Layout from "@/src/components/Layout/Layout";
import ProfileMain from "@/src/components/ProfileMain/ProfileMain";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
    return (
        <Layout>
            <ProfileMain/>
        </Layout>
    );
};

export default Profile;
