import {
  Avatar,
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import logo from "../../../resources/images/logo.png";
import avatar from "../../../resources/images/avatar-01.jpg";
import "./styte.less";
import SearchIcon from "@mui/icons-material/Search";
const MyHeader = () => {
  return (
    <header>
      <Container>
        {/* Phần 1: Logo + Search */}
        <div className="header-logo">
          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* Search Area */}
          <div className="header-logo-search">
            <TextField
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
              placeholder="Type Something..."
            />
          </div>
        </div>
        {/* Phần 2: List menu điều hướng + Profie */}
        <div className="header-menu">
          <ul>
            <li className="active">Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <div className="header-menu-profile">
            <span>Profile</span>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Remy Sharp"
              src={avatar}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default MyHeader;
