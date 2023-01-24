export interface IMatch {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
}

export interface IMatchFromDB extends IMatch {
  id: number;
  inProgress: boolean;
}

export interface IMatchWithTeamName extends IMatchFromDB {
  homeTeam: {
    teamName: string;
  };
  awayTeam: {
    teamName: string;
  };
}

export interface IMatchService {
  getAll(inProgress: string | undefined): Promise<IMatchWithTeamName[]>
}