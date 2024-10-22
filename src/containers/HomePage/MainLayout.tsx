import { Button, Container, Tooltip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GroupsIcon from "@mui/icons-material/Groups";
import Grid from "@mui/material/Grid2";
import "swiper/css";
import "./styte.less";
import "../../resources/styles/helpers/_components.less";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__slider-wrapper">
        <Container>
          <div className="home-page__slider">
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              loop={true}
              className="bannner-slider"
            >
              <SwiperSlide>
                <div className="bannner-slider__item">
                  <div className="bannner-slider__item__title">
                    Flappie birg
                  </div>
                  <div className="bannner-slider__item__info">
                    <div className="bannner-slider__item__info__played">
                      <Tooltip arrow title="Total player">
                        <GroupsIcon />
                      </Tooltip>
                      <span>20k+ </span>
                    </div>
                  </div>
                  <button className="bannner-slider__item__btn sg-btn--primary">
                    <div className="bannner-slider__item__btn__content">
                      <span>Play Now </span>
                      <PlayArrowIcon />
                    </div>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bannner-slider__item">
                  <div className="bannner-slider__item__title">
                    Flappie birg
                  </div>
                  <div className="bannner-slider__item__info">
                    <div className="bannner-slider__item__info__played">
                      <Tooltip arrow title="Total player">
                        <GroupsIcon />
                      </Tooltip>
                      <span>20k+ </span>
                    </div>
                  </div>
                  <button className="bannner-slider__item__btn sg-btn--primary">
                    <div className="bannner-slider__item__btn__content">
                      <span>Play Now </span>
                      <PlayArrowIcon />
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
      <div className="home-page__top-game-wrapper">
        <Container>
          <div className="home-page__top-game">
            <div className="home-page__top-game__title">Top game</div>
            <div className="home-page__top-game__list">
              <Grid
                spacing={2}
                columns={{ lg: 12, md: 6, sm: 6, xs: 1 }}
                container
              >
                <Grid size={3}>
                  <div className="top-game__card-game">
                    <div className="top-game__card-game__display"></div>
                    <div className="top-game__card-game__btn">
                      <PlayCircleOutlineRoundedIcon></PlayCircleOutlineRoundedIcon>
                    </div>
                    <div className="top-game__card-game__title">
                      Flappie birg
                    </div>
                  </div>
                </Grid>
                <Grid size={3}>
                  <div className="top-game__card-game">
                    <div className="top-game__card-game__display"></div>
                    <div className="top-game__card-game__btn">
                      <PlayCircleOutlineRoundedIcon></PlayCircleOutlineRoundedIcon>
                    </div>
                    <div className="top-game__card-game__title">
                      Flappie birg
                    </div>
                  </div>
                </Grid>
                <Grid size={3}>
                  <div className="top-game__card-game">
                    <div className="top-game__card-game__display"></div>
                    <div className="top-game__card-game__btn">
                      <PlayCircleOutlineRoundedIcon></PlayCircleOutlineRoundedIcon>
                    </div>
                    <div className="top-game__card-game__title">
                      Flappie birg
                    </div>
                  </div>
                </Grid>
                <Grid size={3}>
                  <div className="top-game__card-game">
                    <div className="top-game__card-game__display"></div>
                    <div className="top-game__card-game__btn">
                      <PlayCircleOutlineRoundedIcon></PlayCircleOutlineRoundedIcon>
                    </div>
                    <div className="top-game__card-game__title">
                      Flappie birg
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default HomePage;
