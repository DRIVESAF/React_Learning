import { View, Image } from "@tarojs/components";
import { useState, useEffect, useRef } from "react";
import { AtList, AtListItem, AtCard, AtSlider, AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Music = () => {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressTimerRef = useRef(null);

  const musicList = [
    {
      id: 1,
      title: "龙卷风",
      artist: "周杰伦",
      cover: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/%E9%9F%B3%E4%B9%90%E7%9B%92%E5%AD%90/cover/%E9%BE%99%E5%8D%B7%E9%A3%8E.png",
      audio: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/%E9%9F%B3%E4%B9%90%E7%9B%92%E5%AD%90/music/%E9%BE%99%E5%8D%B7%E9%A3%8E.mp3",
      duration: "4:30"
    },
    {
      id: 2,
      title: "流沙",
      artist: "陶喆",
      cover: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/%E9%9F%B3%E4%B9%90%E7%9B%92%E5%AD%90/cover/%E6%B5%81%E6%B2%99.png",
      audio: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/%E9%9F%B3%E4%B9%90%E7%9B%92%E5%AD%90/music/%E6%B5%81%E6%B2%99.mp3",
      duration: "4:15"
    },
    {
      id: 3,
      title: "Shall We Talk",
      artist: "陈奕迅",
      cover: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/%E9%9F%B3%E4%B9%90%E7%9B%92%E5%AD%90/cover/swt.png",
      audio: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/%E9%9F%B3%E4%B9%90%E7%9B%92%E5%AD%90/music/swt.mp3",
      duration: "4:15"
    }
  ];

  useEffect(() => {
    if (!currentMusic) return;

    try {
      // 创建新的音频实例
      const audio = Taro.createInnerAudioContext();
      audio.src = currentMusic.audio;
      audio.onError((res) => {
        console.error('音频播放错误:', res);
        setIsPlaying(false);
      });
      audio.onEnded(() => {
        setIsPlaying(false);
        setProgress(0);
      });
      audioRef.current = audio;

      return () => {
        if (audioRef.current) {
          audioRef.current.stop();
          audioRef.current.destroy();
          audioRef.current = null;
        }
      };
    } catch (error) {
      console.error('音频初始化错误:', error);
      setIsPlaying(false);
    }
  }, [currentMusic]);

  useEffect(() => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.play();
        // 启动进度更新定时器
        progressTimerRef.current = setInterval(() => {
          if (audioRef.current && audioRef.current.duration > 0) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progress || 0);
          }
        }, 1000);
      } else {
        audioRef.current.pause();
        // 清除进度更新定时器
        if (progressTimerRef.current) {
          clearInterval(progressTimerRef.current);
          progressTimerRef.current = null;
        }
      }

      return () => {
        if (progressTimerRef.current) {
          clearInterval(progressTimerRef.current);
          progressTimerRef.current = null;
        }
      };
    } catch (error) {
      console.error('播放控制错误:', error);
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const handlePlayMusic = (music) => {
    if (currentMusic?.id === music.id) {
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.stop();
      }
      setCurrentMusic(music);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleSliderChange = (value) => {
    if (!audioRef.current) return;
    const time = (value / 100) * audioRef.current.duration;
    audioRef.current.seek(time);
    setProgress(value);
  };

  return (
    <View className='music' style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* 当前播放 */}
      {currentMusic && (
        <View style={{ margin: "10px" }}>
          <AtCard title='正在播放'>
            <View style={{ display: "flex", alignItems: "center", padding: "10px 0" }}>
              <View
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "30px",
                  overflow: "hidden",
                  marginRight: "15px"
                }}
              >
                <Image
                  src={currentMusic.cover}
                  mode='aspectFill'
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {currentMusic.title}
                </View>
                <View style={{ fontSize: "14px", color: "#666" }}>
                  {currentMusic.artist}
                </View>
                <View style={{ marginTop: "10px" }}>
                  <AtSlider
                    step={1}
                    value={progress}
                    max={100}
                    onChange={handleSliderChange}
                  />
                </View>
              </View>
              <View
                style={{ padding: "10px" }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <AtIcon
                  value={isPlaying ? "pause" : "play"}
                  size='30'
                  color='#6190E8'
                />
              </View>
            </View>
          </AtCard>
        </View>
      )}

      {/* 音乐列表 */}
      <View style={{ margin: "10px" }}>
        <AtList>
          {musicList.map((music) => (
            <AtListItem
              key={music.id}
              title={music.title}
              note={music.artist}
              thumb={music.cover}
              extraText={music.duration}
              arrow='right'
              onClick={() => handlePlayMusic(music)}
            />
          ))}
        </AtList>
      </View>
    </View>
  );
};

export default Music;
