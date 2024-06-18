import { useSelector } from 'react-redux';

interface Profile {
  id: number;
  name: string;
  gender: string;
  dateofbirth: string;
  address: string;
}

interface State {
  profile: Profile;
}

export default function Profile() {
  const profile = useSelector((state: State) => state.profile);
  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {profile.id}</p>
      <p>Tên: {profile.name}</p>
      <p>Giới tính: {profile.gender}</p>
      <p>Ngày sinh  : {profile.dateofbirth}</p>
      <p>Địa chỉ: {profile.address}</p>
    </div>
  );
}
