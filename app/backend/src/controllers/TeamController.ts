import { Request, Response } from 'express';
import { ITeamService } from '../interfaces';

class TeamController {
  constructor(private teamService: ITeamService) {}

  public getAll = async (_req: Request, res: Response) => {
    const teams = await this.teamService.getAll();
    res.status(200).json(teams);
  };

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const team = await this.teamService.getById(id);
    res.status(200).json(team);
  };
}

export default TeamController;
