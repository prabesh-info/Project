import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
	const { isLoading, suggestedUsers } = useGetSuggestedUsers();

	// optional: render loading skeleton
	if (isLoading) return null;

	return (
		<VStack position={"sticky"} top={0} py={8} px={6} gap={4}>
			<SuggestedHeader />

			{suggestedUsers.length !== 0 && (
				<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
					<Text fontSize={12} fontWeight={500} color={"gray.500"}>
						Suggested for you
					</Text>
				</Flex>
			)}

		 {suggestedUsers.map((user) => (
					<SuggestedUser user={user} key={user.id} />
				))}

				
			

		</VStack>
	);
};

export default SuggestedUsers;
