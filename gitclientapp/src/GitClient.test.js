import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {

    test(
        "should return repository names for techiesyed",
        async () => {

            const dummyData = {

                data: [

                    {
                        id: 1,
                        name: "ReactProject"
                    },

                    {
                        id: 2,
                        name: "NodeProject"
                    }

                ]

            };

            axios.get.mockResolvedValue(dummyData);

            const client = new GitClient();

            const response =
                await client.getRepositories("techiesyed");

            expect(response.data).toEqual(dummyData.data);

            expect(axios.get).toHaveBeenCalledWith(
                "https://api.github.com/users/techiesyed/repos"
            );

        }
    );

});