package com.ssafy.vue;

import java.util.Base64;
import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwsHeader;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTMain {
	public static void main(String[] args) throws Exception {
		/*
		header
		{
		  "alg": "HS256",
		  "typ": "JWT"
		}
		payload
		{
		  "userId": "ssafy",
		  "lang"="java"
		}
		
		HMACSHA256(
		  base64UrlEncode(header) + "." +
		  base64UrlEncode(payload),
		  ssafy
		) ▣ secret base64 encoded
		
		base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + VERIFY SIGNATURE
		==> alg + secret key

		헤더와 페이로드를 합친 문자열을 알고리즘과 시크릿키를 이용하여 서명작업하고 그 결과를 BASE64 encode 처리
		 */
		final String SECRET_KEY = "SSAFY";
		// 토큰 생성
//		String token = 
//				Jwts.builder()
//					.setHeaderParam("alg", "HS256")
//					.setHeaderParam("typ", "JWT")
//					.setHeaderParam("gumi", "구미")
//					.claim("userId", "ssafy")
//					.claim("lang", "자바")
//					.setSubject("jwt 주제")
//					.setExpiration(new Date(System.currentTimeMillis() + 3000000))
//					.signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes("UTF-8"))
//					.compact();
//		System.out.println("token : " + token);

		String token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJsb2ciOjk5OTk5OTk5fQ.M0WzNGhMTJ1TbRzAr5kUmJFw08yn-YhpGMAFLZxoMZ4";
		// payload 부분을 decode 하여 확인
		String headerJson = new String(
				Base64.getDecoder().decode(
						token.split("\\.")[0]
				)
		);
		String payloadJson = new String(
				Base64.getDecoder().decode(
						token.split("\\.")[1]
				)
		);
		System.out.println("header json : " + headerJson		);
		System.out.println("payload json : " + payloadJson		);
		
		// 유효시간 테스트 확인
//		Thread.sleep(4000);
		Thread.sleep(1000);
		
		// 토큰 유효성
		Jws<Claims> claims = Jwts.parser()
								.setSigningKey(SECRET_KEY.getBytes("UTF-8"))
								.parseClaimsJws(token);
		System.out.println("---------------------------------");
		System.out.println(claims);
		JwsHeader<?> header = claims.getHeader();
		Claims payload = claims.getBody();
		String sign = claims.getSignature();
//		System.out.println("---------------------------------");
//		System.out.println("header");
//		System.out.println("alg : " + header.getAlgorithm());
//		System.out.println("type : " + header.getType());
//		System.out.println("gumi : " + header.get("gumi"));
//		System.out.println("---------------------------------");
//		System.out.println("payload");
//		System.out.println("userId : " + payload.get("userId"));
//		System.out.println("lang : " + payload.get("lang"));
//		System.out.println("subject : " + payload.getSubject());
//		System.out.println("---------------------------------");
//		System.out.println("sign");
//		System.out.println(sign);
	}
}
