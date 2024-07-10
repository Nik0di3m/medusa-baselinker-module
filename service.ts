import { Logger } from "@medusajs/medusa";
import { EntityManager } from "@mikro-orm/postgresql";
import { AddOrderParameters } from "./types/addOrderType";
import { baseLinkerFetch } from "./lib";

type InjectedDependencies = {
  logger: Logger;
  manager: EntityManager;
};

class BaseLinkerModuleService {
  protected logger_: Logger;
  protected manager_: EntityManager;

  constructor({ logger, manager }: InjectedDependencies) {
    this.logger_ = logger;
    this.manager_ = manager;
    this.logger_.info("[BaseLinker Module Service]: Initialized");
  }

  async addOrder({
    apiToken,
    parameters,
  }: {
    apiToken: string;
    parameters: AddOrderParameters;
  }) {
    this.logger_.info(`Adding order to BaseLinker with apiToken: ${apiToken}`);
    this.logger_.info(`Parameters: ${JSON.stringify(parameters)}`);
    try {
      await baseLinkerFetch(apiToken, {
        method: "addOrder",
        parameters: parameters,
      });
    } catch (error) {
      this.logger_.error(`Error adding order to BaseLinker: ${error}`);
    }
  }
}

export default BaseLinkerModuleService;
