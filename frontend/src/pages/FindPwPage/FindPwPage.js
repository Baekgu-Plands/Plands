import React, { useState } from "react";
import {
  Container,
  FindPwBlock,
  FindPwHeader,
  Content,
  ContentRow,
} from "./FindPwPage.style";
import Header from "components/header/Header";
import Nav from "components/nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:9999/beakgu/member";

const FindPwPage = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const onClickFindBtn = (e) => {
    e.preventDefault();

    axios
      .post(
        `${URL}/epwd`,
        {
          id: id,
          email: email,
        },
        {
          headers: {
            "Content-Type":
              "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        alert("임시 비밀번호를 보냈습니다");
        navigate("/login");
      })
      .catch(() => {
        alert("입력 정보를 확인해주세요");
      });
  };

  return (
    <div>
      <Header />
      <Nav />
      <Container>
        <FindPwBlock>
          <FindPwHeader>
            <div id="title">비밀번호 찾기</div>
          </FindPwHeader>
          <Content>
            <ContentRow>
              <input
                type="text"
                id="id"
                placeholder="아이디를 입력해주세요."
                value={id}
                onChange={handleId}
              />
            </ContentRow>
            <ContentRow>
              <input
                type="email"
                id="email"
                placeholder="이메일 주소를 입력해주세요."
                value={email}
                onChange={handleEmail}
              />
            </ContentRow>
            <ContentRow>
              <button onClick={onClickFindBtn}>찾기</button>
            </ContentRow>
          </Content>
        </FindPwBlock>
      </Container>
    </div>
  );
};

export default FindPwPage;
