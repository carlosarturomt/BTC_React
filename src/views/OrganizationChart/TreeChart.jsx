import React from "react";
import styled from "styled-components";
import { Tree, TreeNode } from "react-organizational-chart";

function TreeChart() {
	const StyledNodeC = styled.div`
		padding: 5px;
		border-radius: 8px;
		display: inline-block;
		border: 1px solid red;
		color: #fefefe;
	`;

	const StyledNode = () => {
		return (
			<div>
				<h1 className="w-fit inline-block rounded-lg py-3 px-4 text-gray-200 bg-[#ffffff17]">
					Root
				</h1>
			</div>
		);
	};

	return (
		<>
			<Tree
				lineWidth={"2px"}
				lineColor={"green"}
				lineBorderRadius={"10px"}
				label={<StyledNode />}
			>
				<TreeNode label={<StyledNodeC>Child 1</StyledNodeC>}>
					<TreeNode label={<StyledNodeC>Grand Child</StyledNodeC>} />
				</TreeNode>
				<TreeNode label={<StyledNodeC>Child 2</StyledNodeC>}>
					<TreeNode label={<StyledNodeC>Grand Child</StyledNodeC>}>
						<TreeNode label={<StyledNodeC>Great Grand Child 1</StyledNodeC>} />
						<TreeNode label={<StyledNodeC>Great Grand Child 2</StyledNodeC>} />
					</TreeNode>
				</TreeNode>
				<TreeNode label={<StyledNodeC>Child 3</StyledNodeC>}>
					<TreeNode label={<StyledNodeC>Grand Child 1</StyledNodeC>} />
					<TreeNode label={<StyledNodeC>Grand Child 2</StyledNodeC>} />
				</TreeNode>
			</Tree>
		</>
	);
}

export { TreeChart };
