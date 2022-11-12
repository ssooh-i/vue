/**
 * Solution_Programers
 */
public class Solution_Programers {
    public static void main(String[] args) {
        Solution sol = new Solution();
        int n = 5;
        int[][] build_frame = { { 1, 0, 0, 1 }, { 1, 1, 1, 1 }, { 2, 1, 0, 1 }, { 2, 2, 1, 1 }, { 5, 0, 0, 1 },
                { 5, 1, 0, 1 }, { 4, 2, 1, 1 }, { 3, 2, 1, 1 } };
        int[][] answer = sol.solution(n, build_frame);
    }
}

class Solution {

    public int[][] solution(int n, int[][] build_frame) {
        int[][] answer = {};
        boolean[][][] pan = new boolean[n + 2][n + 2][2];
        int cnt = 0;
        for (int i = 0; i < build_frame.length; i++) {
            int x = build_frame[i][0];
            int y = build_frame[i][1];
            int a = build_frame[i][2]; // 설치할 구조물. 0 : 기둥, 1 : 보
            int b = build_frame[i][3]; // 삭제 or 설치. 0 : 삭제, 1 : 설치
            /*
             * 기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
             * 보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.
             */
            if (a == 1 && b == 1) { // 보를 설치할 경우
                if (boCon(pan, y, x, b)) {
                    pan[y][x][1] = true;
                    cnt++;
                }
            } else if (a == 1 && b == 0) { // 보를 제거할 경우
                pan[y][x][1] = false;
                cnt--;
                // if (!dungCon(pan, y, x, b) || !dungCon(pan, y, x + 1, b) || !boCon(pan, y, x
                // + 1, b)
                // || !boCon(pan, y, x - 1, b)) {
                // pan[y][x][1] = true;
                // cnt++;
                // }
            } else if (a == 0 && b == 1) { // 기둥을 설치할 경우
                if (dungCon(pan, y, x, b)) {
                    pan[y][x][0] = true;
                    cnt++;
                }
            } else if (a == 0 && b == 0) { // 기둥을 제거할 경우
                pan[y][x][0] = false;
                cnt--;
                // if (!dungCon(pan, y + 1, x, b) || !boCon(pan, y + 1, x, b) || !boCon(pan, y +
                // 1, x - 1, b)) {
                // pan[y][x][0] = true;
                // cnt++;
                // }
            }
        }
        answer = new int[cnt][3];
        int idx = 0;
        for (int i = 0; i < pan.length; i++) {
            for (int j = 0; j < pan.length; j++) {
                for (int z = 0; z < 2; z++) {
                    if (pan[j][i][z]) {
                        answer[idx++] = new int[] { i, j, z };
                    }
                }
            }
        }
        return answer;
    }

    static boolean boCon(boolean[][][] pan, int y, int x, int b) {
        if (y < 0 || y >= pan.length || x < 0 || x >= pan.length || (b == 0 && !pan[y][x][1]))
            return true;
        if (x == 0) {
            return pan[y - 1][x][0] || pan[y - 1][x + 1][0] || pan[y][x + 1][1];
        } else if (x == pan.length - 1) {
            return pan[y - 1][x][0] || pan[y][x - 1][1];
        }
        return pan[y - 1][x][0] || pan[y - 1][x + 1][0] || (pan[y][x - 1][1] && pan[y][x + 1][1]);
    }

    static boolean dungCon(boolean[][][] pan, int y, int x, int b) {
        if (y < 0 || y >= pan.length || x < 0 || x >= pan.length || (b == 0 && !pan[y][x][0]))
            return true;
        if (x == 0) {
            return y == 0 || pan[y][x][1] || pan[y - 1][x][0];
        }
        return y == 0 || pan[y][x][1] || pan[y][x - 1][1] || pan[y - 1][x][0];
    }
}