import React from "react";
import { Box, Typography } from "@material-ui/core";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export const SkillRadar = ({ name, data, color }) => {
  return (
    <Box mb={10}>
      <Box mb={3} textAlign="center">
        <Typography variant="h3">{name}</Typography>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart
          data={data}
          margin={{ top: 5, right: 50, left: 50, bottom: 5 }}
        >
          <PolarGrid />
          <PolarAngleAxis
            style={{ padding: "10px" }}
            fontSize={15}
            dataKey="SkillName"
          />
          <PolarRadiusAxis
            domain={[0, 5]}
            tickCount={6}
            tick={false}
            angle={60}
            axisLine={false}
          />
          <Radar
            name="Skill-Level"
            dataKey="LearningLevel"
            stroke={color}
            fill={color}
            fillOpacity={0.3}
          />
          {/* <Tooltip /> */}
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
};

SkillRadar.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  color: PropTypes.string,
};
