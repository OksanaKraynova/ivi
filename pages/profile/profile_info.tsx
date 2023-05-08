import Layout from '@/src/components/Layout/Layout'
import ProfileInfoMain from '@/src/components/Profile_info/ProfileInfoMain'
import React from 'react'

type Props = {}

const Profile_info = (props: Props) => {
  return (
    <Layout>
      <ProfileInfoMain/>
    </Layout>
  )
}

export default Profile_info